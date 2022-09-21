import React,{useState} from 'react';
import {  useNavigate,Link } from "react-router-dom";
import axios from 'axios';


function addBannerdetails(props) {
    const [banner_details_id, setBanner_Details_Id] = useState("");
    const [banner_details_iderror, setBanner_Details_IdError] = useState([]);
    const [banner_id, setBanner_Id] = useState("");
    const [banner_iderror, setBanner_IdError] = useState([]);
    const [banner_details_title, setBanner_Details_Title] = useState("");
    const [banner_details_titleerror, setBanner_Details_TitleError] = useState([]);
    const [banner_details_desc, setBanner_Details_Desc] = useState("");
    const [banner_details_descerror, setBanner_Details_DescError] = useState([]);
    const [banner_details_image, setBanner_Details_Image] = useState("");
    const [banner_details_imageError, setBanner_Details_ImageError] = useState([]);
    const [banner_details_url, setBanner_Details_Url] = useState("");
    const [banner_details_urlerror, setBanner_Details_UrlError] = useState([]);
    
  return (
    <div>
             
    </div>
  );
}

export default addBannerdetails;
