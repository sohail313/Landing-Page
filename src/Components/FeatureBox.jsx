import React from 'react';

function FeatureBox(props){
    return(
        <div className='a-box'>
            <div className="a-b-img">
                <img src={props.image} alt=""/>
            </div>
            <div className="s-b-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, similique ipsam pariatur doloremque consequatur molestias voluptatibus. Tempora accusantium, debitis illo pariatur aperiam aspernatur accusamus rerum provident cumque doloribus dignissimos assumenda.</p>

            </div>
        </div>
    )
}
export default FeatureBox;