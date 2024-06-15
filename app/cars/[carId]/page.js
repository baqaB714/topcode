import React from 'react';

const Page = ({params , searchParams}) => {
    return (
        <div>
            {params.carId}
            carId page...
            <br/>
            {searchParams.name}
            <br/>
            {searchParams.color}
        </div>
    );
}

export default Page;
