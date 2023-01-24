import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HelmetComponent({title, description, type, img}) {

const hostname = "https://happyeverafterwedding.pl"

return (
    <Helmet>
    { /* Standard metadata tags */ }
    <title>{title}</title>
    <meta name='description' content={description} />
    { /* End standard metadata tags */ }
    { /* Facebook tags */ }
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={hostname + img} />
    { /* End Facebook tags */ }
    </Helmet>
)
}