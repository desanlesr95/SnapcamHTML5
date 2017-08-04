class Camara{
	Camara(video_id,canvas_id){
		this.video=document.getElementById(video_id);
		this.canvas=document.getElementById(canvas_id);
	}

	if(this.hashMedia()){
		navigator.webkitGetUserMedia({video: true},(localMediaStream)=>{
			this.video.src=this.video.src=window.URL.createObjectURL(localMediaStream)
		},(err) => console.log(err))

	}
	else{
		alert("Tu navegador esta descatualizado");
	}

	constrains(){
		return{
			video:{

			}
		}
	}

	hashMedia(){
		return !!(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||);
	}
	set_video(stream){
		this.video.src=window.URL.createObjectURL(localMediaStream);
	}
	set_canvas(){
		this.context=this.canvas.getContext("2d");
		video.addListener("play",()=> this.loop());
	}	
}