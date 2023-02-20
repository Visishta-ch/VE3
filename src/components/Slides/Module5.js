import React from 'react';
import Tabs from '../ModuleSection/Tabs';
import Header from '../ModuleSection/Header';
import Footer from '../ModuleSection/Footer';
import t1 from '../../assets/m5t1.jpg'
import t2 from '../../assets/m5t2.webp'
import t3 from '../../assets/m5t3.webp'
const Module5 = () => {
  const tabs = [
    {
      title: 'Tab 1',
      heading:'Morbi arcu libero',
      image:t1 ,
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: 'Tab 2',
      heading:'Ut hendrerit est toth',
      image: t2,
      content:'Dolore qui aliqua ex qui est quis anim culpa. Commodo eu cupidatat aute ad. Consequat velit magna qui proident eiusmod exercitation sunt elit nostrud amet tempor excepteur.',
    },
    {
      title: 'Tab 3',
      heading:'Ut hendrerit est tovegh',
      image: t3,
      content:'Eex qui est quis anim culpa. Commodo eu cupidatat aute ad. Consequat velit magna qui proident eiusmod exercitation sunt elit nostrud amet tempor excepteur.',
    },
  ];
  return (
    <>
    <div className="container1">
      <Header>Module 5</Header>
      <Tabs tabs={tabs} />
    </div>
    <Footer path1={`${'/module1'}`} path2={`${'/searchpage'}`} />
    </>
  );
};

export default Module5;
