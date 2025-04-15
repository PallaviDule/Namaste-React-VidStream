import React from 'react';

const data = [
    {
        name: 'Pallavi Dule', 
        text: 'Hi, Nice Reply', 
        replies: [
            {
                name: 'Kunal', 
                text: 'Yes, first', 
                replies:[{
                    name: 'Kunal', 
                    text: 'Yes, second', 
                    replies:[]
                },
                {
                    name: 'Kunal', 
                    text: 'Yes, second', 
                    replies:[]
                }]
            },
            {
                name: 'Kunal', 
                text: 'Yes, first', 
                replies:[]
            }
        ]
    }
];

const Comment = ({commentData}) => {
    return (
        <div className='flex'>
            <div className='w-15 h-15'>
                <img 
                    alt='user image'
                    src= 'data:image/png;base64,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'
                />
            </div>
            <div className='p-1'>
                <p className='text-sm font-bold'>{commentData.name}</p>
                <p className='text-sm'>{commentData.text}</p>
            </div>
        </div>
    )
};

const CommentList = (props) => {
    return (
        props.data.map((value) => (
            <div>
                <Comment commentData={value} />
                {   value.replies.length > 0 && 
                    <div className='px-10'>
                        <CommentList data={value.replies} />
                    </div>
                }
            </div>
        ))
    )
}

const CommentContainer = ({commentCount}) => {
  return (
    <div>
        <div className='text-xl font-bold py-2'>{commentCount} Comments</div>
        <CommentList data={data} />
    </div>
  )
};

export default CommentContainer;