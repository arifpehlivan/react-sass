import { ArrowBack, ArrowForward } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import {Data} from "./Data"
import "./styles/Section.scss"

const Section = ({slides}) => {
    const [first,setFirst] = useState(0);
    const length = slides.length;
    return (
        <section>
            <div className="slide">
                <ArrowBack className='back'/>
                <ArrowForward className='forward'/>
                {Data.map((item,index) => {
                    return (
                        <div className={item.className}>
                            <div className={index === first ? "slides active" : "slides"}>
                                {index === first && (
                                    <div>
                                    <img src={item.image} alt=""/>
                                    <p className='places'>{item.text}</p>
                                    <p className='status'>{item.status}</p>
                                    <div className='buttons'>
                                        <button>Join</button>
                                        <button>Discover</button>
                                    </div>
                                    <div className="bottom">
                                        <p>You will get 50% off if its your first purchase !</p>
                                    </div>
                                </div>
                                )}
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Section