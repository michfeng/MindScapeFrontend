import React, { Component } from "react";


class Upload extends Component {
    constructor(props) {
        super(props);

        this.selectedFile = null;
        this.selectedVideo = null;
        this.selectedClass = null;

        this.updateVideo = this.updateVideo.bind(this);
        this.updateClass = this.updateClass.bind(this);
        this.updateFile = this.updateFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateVideo  = (event) => {
        this.selectedVideo = event.target.value;
    }

    updateClass  = (event) => {
        this.selectedClass = event.target.value;
    }

    updateFile = (event) => {
        this.selectedFile = event.target.files[0];
    }

    handleSubmit = () => {
        console.log("Sending information");

        if (this.selectedFile != null)
            console.log("File not null");
        if (this.selectedVideo != null)
            console.log("video not null");
    }

    render () {
        return (
            <form className="upload" enctype="multipart/form-data" id="/upload" action={"http://4f39-68-65-175-64.ngrok.io/classes/?session_id="+this.props.id} method="POST">
                <div className="row"> 
                    <div className="col up">
                        <div className="class">
                            <div className="uploadCard">
                                <h1>What class is this for?</h1>
                                <input type="text" className="vidLink" name="name" onChange={this.updateClass}/> 
                            </div>
                        </div>
                        <div className="video">
                            <div className="uploadCard">
                                <h1>Link a video</h1>
                                <input type="text" className="vidLink" name="vidLink" placeholder="Copy and paste from YouTube" onChange={this.updateVideo}/>
                            </div>
                        </div>
                    </div>
                    <div className="col up">
                        <div className="uploadMedia">
                            <div className="uploadCard">
                                <h1>Upload a file</h1>
                                <p>Please only upload files with .pdf or .docx extensions for the best results.</p>
                                <input className="upload_file" type="file" name="file" onChange={this.updateFile} />
                            </div>
                        </div>
                        <button onClick={this.handleSubmit} className="uploadBut"><h3 className="proceed">Proceed</h3></button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Upload;

/*export const Upload = () => {

    const sendInformation = () => {
        console.log("Sending information");
    };

    return (
        <div className="upload">
            <div className="row">
                <div className="col">
                    <div className="uploadCard">
                        <h1>Link a video</h1>
                        <input type="text" className="vidLink" name="vidLink" placeholder="Copy and paste from YouTube"/>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="uploadMedia">
                        <div className="uploadCard">
                            <h1>Upload a file</h1>
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                    </div>
                    <button className="uploadBut" onClick={sendInformation}><h3 className="proceed">Proceed</h3></button>
                </div>
            </div>
        </div>
    );
}*/