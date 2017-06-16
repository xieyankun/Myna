
$(function(){

    var recorder;

    var audio = document.querySelector('audio');
    // var audio = document.getElementById('audio');

    function startRecording() {
       
    }

    function stopRecording() {
       recorder.stop();
    }

    function playRecording() {

       recorder.play(audio);
    }


    // $("#startRec").trigger('click');

    function uploadAudio() {
        recorder.upload("", function (state, e) {
            switch (state) {
                case 'uploading':
                    //var percentComplete = Math.round(e.loaded * 100 / e.total) + '%';
                    break;
                case 'ok':
                    console.log(e.target.responseText);
                    alert("上传成功");
                    break;
                case 'error':
                    alert("上传失败");
                    break;
                case 'cancel':
                    alert("上传被取消");
                    break;
            }
        });
    }


});


