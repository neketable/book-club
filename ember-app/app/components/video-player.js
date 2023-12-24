import Component from '@ember/component';

export default Component.extend({
  actions: {
    handleFileInput(event) {
      const file = event.target.files[0];
      const videoElement = this.element.querySelector('video');

      if (videoElement && file) {
        const fileURL = URL.createObjectURL(file);
        videoElement.src = fileURL;
        videoElement.play();
      }
    }
  }
});
