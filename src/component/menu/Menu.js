import React from 'react'
import "./Menu.css"
import { AiOutlineHome,AiFillSetting,AiOutlineQuestion } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";

const Menu = () => {
  return <>
        <div className="menu">
                <div className="menu-div">
                    <img src="../../../images/cloud.svg"/>
                    <div className="menu-list">
                        <li className="icon" name="خانه"><AiOutlineHome/></li>
                        <li className="icon" name='پشتیبانی'><BiMessageDetail/></li>
                        <li className="icon" name='امور مالی'><BsCashCoin/></li>
                        <li className="icon" name='تنظیمات'><AiFillSetting/></li>
                        <li className="icon" name='help'><AiOutlineQuestion /></li>
                    </div>
                </div>
        </div>
  </>
}

export default Menu