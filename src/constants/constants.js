import Link from 'next/link';

export const projects = [
  {
    title: 'Volunteer Application',
    description: "Pandamic Has Affected The Lives Of Many People In The World. This Project Creates Opportunities For Students To Volunteer To Help Those In Need.",
      image: '/images/image.png',
      tags: ['Ai', 'Ae', 'Pr', 'Node'],
    source: 'https://www.youtube.com/watch?v=p4Vy6R2Ol10',
    visit: 'https://www.youtube.com/watch?v=p4Vy6R2Ol10',
    id: 0,
  },
  {
    title: 'What is the Future of Energy?',
    description:"Energy Has Become A Major Problem For Human Society. This Short Movie Features The Possible Future For Humanity If We Do Not Take Action Now.",
    image: '/images/Energy.png',
    tags: ['React', 'JavaScript', 'Node', 'Latex'],
    source: <Link href='/photography.js'></Link>,
    visit: 'https://www.youtube.com/watch?v=rxuLi6iGDkY&t=19s',
    id: 1,
  },
  {
    title: 'Hope',
    description: "Short Movie Featured In Internation Film Festival. The Movie Hope Received Grand Prix Price In 2022 International Film Festival For Young People.",
      image: '/images/Hope.png',
      tags: ['React', 'WebRTC', 'ADAS', 'Lane Tracing'],
    source: 'https://www.youtube.com/watch?v=Mr5qPjJMqAI&t=2s',
    visit: 'https://www.youtube.com/watch?v=Mr5qPjJMqAI&t=2s',
    id: 2,
  },
  {
    title: 'Photography',
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: '/images/dolgi2.jpg',
    tags: ['React', 'ChatEngine', 'Firebase', 'Blender', 'Houdini'],
    source: 'https://www.instagram.com/curatorshelf/',
    visit: 'https://www.instagram.com/curatorshelf/',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'If this changes, then its success', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];