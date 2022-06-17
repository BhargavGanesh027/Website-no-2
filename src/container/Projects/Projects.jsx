import React from 'react'
import {Card, Button} from 'antd'
import './Projects.css'
import {images} from '../../constants'

const {Meta} = Card;

const Projects = () => {
  return (
    <div className='app-projects' id='projects'>
        <div onClick={()=>{window.location.assign('https://tesla-clone-bg-1b190.web.app')}}>
            <Card
                className='my-card'
                hoverable
                style={{ width: 300}}
                cover={<img className='my-imgp' alt="example" src={images.tesla} style={{ height:'200px', width:'300px'}}/>}
                >
                <Meta title="Tesla Clone Website" description="https://tesla-clone-bg-1b190.web.app" />
            </Card>
        </div>

        <div onClick={()=>{window.location.assign('https://vanilla-js-bg027.netlify.app')}}>
            <Card
                className='my-card' 
                hoverable
                style={{ width: 300}}
                cover={<img className='my-imgp' alt="example" src={images.js} style={{ height:'200px', width:'300px', objectFit: 'cover'}}/>}
                >
                <Meta title="Vanilla JS Projects" description="https://vanilla-js-bg027.netlify.app" />
            </Card>
        </div>

        <div onClick={()=>{window.location.assign('https://cryptoverse-bg027.netlify.app')}}>
            <Card
                className='my-card'
                hoverable
                style={{ width: 300}}
                cover={<img className='my-imgp' alt="example" src={images.btc} style={{ height:'200px', width:'300px', objectFit: 'cover'}}/>}
                >
                <Meta title="Cool CryptoCurrency App" description="https://cryptoverse-bg027.netlify.app" />
            </Card>
        </div>
    </div>
  )
}

export default Projects