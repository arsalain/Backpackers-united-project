import React, { useEffect } from 'react';

const BookingWidget = () => {
    useEffect(() => {
        // Load the external script
        const script = document.createElement('script');
        script.src = 'https://logout.world/static/widget/logout-booking.js';
        script.async = true;
        script.onload = initWidget;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const initWidget = () => {
        if (window.logout && window.logout.widget) {
            window.logout.widget.setConfig({
                eventSlug: "skandagiri-trek",
                placement: "#book-container",
                customClass: "btn-custom",
                btnId: "logout-bnb",
                downloadBtnId: "logout-download-button",
                enquiryBtnId: "logout-enquiry-button",
                showEverything: true,
                onlyButton: false,
                showItineraryButton: true,
                showEnquiryButton: true,
                bookNowButtonColor: "#28a745",
                itineraryButtonColor: "#dc3545",
            });
            window.logout.widget.init();
        }
    }

    return <div id="book-container"></div>;
}

export default BookingWidget;