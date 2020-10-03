import React from 'react';
import NotFoundImage from '../../assets/images/404-error-page-templates.jpg';

export default function NotFound() {
    return (
        <div>
            <img 
            src={NotFoundImage} 
            alt="not-found-background-image"
            width="100%"
            />
        </div>
    )
}