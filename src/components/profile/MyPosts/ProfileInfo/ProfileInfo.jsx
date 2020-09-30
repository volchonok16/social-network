import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import dartvaider from "../../../../assets/images/dartvaider.jpg";


const ProfileInfo = ({profile, status, updateStatus, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.DescriptionBlock}>
                <img src = 'https://wordpress-network.prod.aws.skyscnr.com/wp-content/uploads/2018/05/maldives-5.jpg?w=1000&h=312&crop=1' className={s.img}/>
                <img src={profile.photos.large != null ? profile.photos.large : dartvaider} className={s.userPhoto}/>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
            );
            }
        export default ProfileInfo;