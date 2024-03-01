window.addEventListener('scroll', function() {
    var videoFrame = document.getElementById('videoFrame');
    var videoFrameRect = videoFrame.getBoundingClientRect();

    // Check if the video frame is in the viewport
    if (
        videoFrameRect.top >= 0 &&
        videoFrameRect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        // Video is in view, play it
        videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    } else {
        // Video is out of view, pause it
        videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
});
