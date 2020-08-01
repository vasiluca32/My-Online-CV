import React from "react";
import "./Thank-you.css";
import clip from "../../src/video.mp4";
import poster from "../../src/poster.jpg";

export default function Video() {

    return (
        <div className="video-wrap">
            <video className="frame" src={clip} type="video/mp4" poster={poster} controls>

                Your browser does not support the video tag.
            </video>
        </div>

    )
}