/**
 * Legacy JavaScript for the student dashboard.
 * Please do not add anything else to this file unless
 * you have an extremely good reason.  New JavaScript
 * for the dashboard should be implemented as self-contained
 * modules with unit tests.
 */

 /* globals Logger, accessible_modal, interpolate */

 var edx = edx || {};

 (function($, gettext, Logger, accessibleModal, interpolate) {
     'use strict';

     edx.dashboard = edx.dashboard || {};
     edx.dashboard.legacy = {};

    /**
     * Initialize the dashboard using legacy JavaScript.
     *
     * @param{Object} urls - The URLs used by the JavaScript,
     *     which are generated by the server and passed into
     *     this function by the rendered page.
     *
     *     Specifically:
     *         - dashboard
     *         - signInUser
     *         - changeEmailSettings
     *         - verifyToggleBannerFailedOff
     */
     edx.dashboard.legacy.init = function(urls) {
         var $notifications = $('.dashboard-notifications'),
             $upgradeButtonLinks = $('.action-upgrade'),
             $verifyButtonLinks = $('.verification-cta > .cta');

        // On initialization, set focus to the first notification available for screen readers.
         if ($notifications.children().length > 0) {
             $notifications.focus();
         }

        // Track clicks of the upgrade button. The `trackLink` method is a helper that makes
        // a `track` call whenever a bound link is clicked. Usually the page would change before
        // `track` had time to execute; `trackLink` inserts a small timeout to give the `track`
        // call enough time to fire. The clicked link element is passed to `generateProperties`.
        // NOTE: This is a duplicate of the 'edx.course.enrollment.upgrade.clicked' event with
        //  location learner_dashboard.  This bi event is being left in for now because:
        //  1. I don't know who is relying on it and it is viewable separately in GA.
        //  2. The other event doesn't yet have the benefit of the timeout of trackLink(), so
        //     the other event might under-report as compared to this event.
         window.analytics.trackLink($upgradeButtonLinks, 'edx.bi.dashboard.upgrade_button.clicked', generateProperties);

        // Track clicks of the "verify now" button.
         window.analytics.trackLink($verifyButtonLinks, 'edx.bi.user.verification.resumed', generateProperties);

        // Track clicks of the LinkedIn "Add to Profile" button
         window.analytics.trackLink(
            $('.action-linkedin-profile'),
            'edx.bi.user.linkedin_add_to_profile',
            function(element) {
                var $el = $(element);
                return {
                    category: 'linkedin',
                    label: $el.data('course-id'),
                    mode: $el.data('certificate-mode')
                };
            }
        );


        // Generate the properties object to be passed along with business intelligence events.
         function generateProperties(element) {
             var $el = $(element),
                 properties = {};

             if ($el.hasClass('action-upgrade')) {
                 properties.category = 'upgrade';
             } else if ($el.hasClass('cta')) {
                 properties.category = 'verification';
             }

             properties.label = $el.data('course-id');

             return properties;
         }

         function setDialogAttributes(isPaidCourse, certNameLong,
                                        courseNumber, courseName, enrollmentMode, showRefundOption, courseKey) {
             // This flag is added for REV-19 experiment
             var auditRefundableCourses = (window.experimentVariables || {}).auditRefundableCourses,
                 courseInExperiment = auditRefundableCourses ? auditRefundableCourses.indexOf(courseKey) > -1 : false,
                 diagAttr = {};

             if (isPaidCourse || courseInExperiment) {
                 if (showRefundOption) {
                     diagAttr['data-refund-info'] = gettext('You will be refunded the amount you paid.');
                 } else {
                     diagAttr['data-refund-info'] = gettext('You will not be refunded the amount you paid.');
                 }
                 diagAttr['data-track-info'] = gettext('Are you sure you want to unenroll from the purchased course ' +
                                                   '%(courseName)s (%(courseNumber)s)?');
             } else if (enrollmentMode !== 'verified') {
                 diagAttr['data-track-info'] = gettext('Are you sure you want to unenroll from %(courseName)s ' +
                                                   '(%(courseNumber)s)?');
             } else if (showRefundOption) {
                 diagAttr['data-track-info'] = gettext('Are you sure you want to unenroll from the verified ' +
                                                   '%(certNameLong)s  track of %(courseName)s  (%(courseNumber)s)?');
                 diagAttr['data-refund-info'] = gettext('You will be refunded the amount you paid.');
             } else {
                 diagAttr['data-track-info'] = gettext('Are you sure you want to unenroll from the verified ' +
                                                   '%(certNameLong)s track of %(courseName)s (%(courseNumber)s)?');
                 diagAttr['data-refund-info'] = gettext('The refund deadline for this course has passed,' +
                     'so you will not receive a refund.');
             }

             return diagAttr;
         }

         $('#failed-verification-button-dismiss').click(function() {
             $.ajax({
                 url: urls.verifyToggleBannerFailedOff,
                 type: 'post'
             });
             $('#failed-verification-banner').addClass('is-hidden');
         });

         $('.action-upgrade').click(function() {
             Logger.log('edx.course.enrollment.upgrade.clicked', {location: 'learner_dashboard'});
         });

         $('.action-email-settings').click(function(event) {
             $('#email_settings_course_id').val($(event.target).data('course-id'));
             $('#email_settings_course_number').text($(event.target).data('course-number'));
             if ($(event.target).data('optout') === 'False') {
                 $('#receive_emails').prop('checked', true);
             }
         });
         $('.action-unenroll').click(function(event) {
             var isPaidCourse = $(event.target).data('course-is-paid-course') === 'True',
                 certNameLong = $(event.target).data('course-cert-name-long'),
                 enrollmentMode = $(event.target).data('course-enrollment-mode'),
                 courseNumber = $(event.target).data('course-number'),
                 courseName = $(event.target).data('course-name'),
                 courseRefundUrl = $(event.target).data('course-refund-url'),
                 courseKey = $(event.target).data('course-id'),
                 dialogMessageAttr;

             var request = $.ajax({
                 url: courseRefundUrl,
                 method: 'GET',
                 dataType: 'json'
             });
             request.success(function(data, textStatus, xhr) {
                 if (xhr.status === 200) {
                     dialogMessageAttr = setDialogAttributes(isPaidCourse, certNameLong,
                                    courseNumber, courseName, enrollmentMode, data.course_refundable_status, courseKey);

                     $('#track-info').empty();
                     $('#refund-info').empty();

                     $('#track-info').html(interpolate(dialogMessageAttr['data-track-info'], {
                         courseNumber: ['<span id="unenroll_course_number">', courseNumber, '</span>'].join(''),
                         courseName: ['<span id="unenroll_course_name">', courseName, '</span>'].join(''),
                         certNameLong: ['<span id="unenroll_cert_name">', certNameLong, '</span>'].join('')
                     }, true));


                     if ('data-refund-info' in dialogMessageAttr) {
                         $('#refund-info').text(dialogMessageAttr['data-refund-info']);
                     }

                     $('#unenroll_course_id').val($(event.target).data('course-id'));
                 } else {
                     $('#unenroll_error').text(
                        gettext('Unable to determine whether we should give you a refund because' +
                                ' of System Error. Please try again later.')
                     ).stop()
                      .css('display', 'block');

                     $('#unenroll_form input[type="submit"]').prop('disabled', true);
                 }
             });
             request.fail(function() {
                 $('#unenroll_error').text(
                        gettext('Unable to determine whether we should give you a refund because' +
                                ' of System Error. Please try again later.')
                 ).stop()
                  .css('display', 'block');

                 $('#unenroll_form input[type="submit"]').prop('disabled', true);
             });

             $('#unenroll-modal').css('position', 'fixed');
         });

         $('#email_settings_form').submit(function() {
             $.ajax({
                 type: 'POST',
                 url: urls.changeEmailSettings,
                 data: $(this).serializeArray(),
                 success: function(data) {
                     if (data.success) {
                         location.href = urls.dashboard;
                     }
                 },
                 error: function(xhr) {
                     if (xhr.status === 403) {
                         location.href = urls.signInUser;
                     }
                 }
             });
             return false;
         });

         $('.action-email-settings').each(function(index) {
             $(this).attr('id', 'email-settings-' + index);
            // a bit of a hack, but gets the unique selector for the modal trigger
             var trigger = '#' + $(this).attr('id');
             accessibleModal(
                trigger,
                '#email-settings-modal .close-modal',
                '#email-settings-modal',
                '#dashboard-main'
             );
         });

         $('.action-unenroll').each(function(index) {
             $(this).attr('id', 'unenroll-' + index);
             // a bit of a hack, but gets the unique selector for the modal trigger
             var trigger = '#' + $(this).attr('id');
             accessibleModal(
                trigger,
                '#unenroll-modal .close-modal',
                '#unenroll-modal',
                '#dashboard-main'
             );
         });

         $('#unregister_block_course').click(function(event) {
             $('#unenroll_course_id').val($(event.target).data('course-id'));
             $('#unenroll_course_number').text($(event.target).data('course-number'));
             $('#unenroll_course_name').text($(event.target).data('course-name'));
         });
     };
 }(jQuery, gettext, Logger, accessible_modal, interpolate));