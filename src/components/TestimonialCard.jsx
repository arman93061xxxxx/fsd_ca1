import React from 'react'

export const TestimonialCard = ({data}) => {
  return (
   <div>
<h1>
{data.CustomerName}
</h1>
<h2>
{data.ReviewText}
</h2>
   </div>
  )
}
