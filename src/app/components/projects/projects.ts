export interface projects {
    image: string,
    head: string,
    desc: string,
    techUsed: string[],
    LiveLink:string,
    createdDate:Date
}

export const Projects: projects[] = [
    {
        image: '/assets/icons/chat_app.gif',
        head:'Join - A chatting app',
        desc:' Join is a chat application',
        techUsed:['ReactJs','Firebase','NodeJS'],
        LiveLink:'none',
        createdDate:new Date('2022-01-17')
    },
    {
        image: '/assets/icons/Tasky.gif',
        head:'Task management app',
        desc:' task management app given you feature of authentication, CRUD, function of MONGODB',
        techUsed:['ReactJs','MongoDB','NodeJS','Express'],
        LiveLink:'none',
        createdDate:new Date('2023-09-09')
    },
    {
        image: '/assets/icons/box_office.gif',
        head:'Box Office',
        desc:' Box Office is a webapp where you can search about actors and movies and make them starred',
        techUsed:['ReactJs','APIs'],
        LiveLink:'none',
        createdDate:new Date('2022-01-06')
    },
    {
        image: '/assets/icons/newsapp.gif',
        head:'NEWS APP',
        desc:' News app is an application where you can read live news',
        techUsed:['ReactJs','APIs','BootStrap'],
        LiveLink:'none',
        createdDate:new Date('2022-03-07')
    },
    {
        image: '/assets/icons/musicplayer.gif',
        head:'Music Player',
        desc:' Music player is demo of todays spotify not same. ',
        techUsed:['HTML','CSS','JS'],
        LiveLink:'none',
        createdDate:new Date('2022-06-27')
    }
]