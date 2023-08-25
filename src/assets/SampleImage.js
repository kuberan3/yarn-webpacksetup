import React from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { useEffect } from 'react';

function SampleImage() {
  

  const [name,setname]=useState("kuberan");
  return <div>
    <p>hello{name}</p>
    <Button type='primary' >hello</Button>
    <img height="200" width="200" src="https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73786.jpg?w=2000" alt="Icon" />
  </div> 
}

export default SampleImage;
