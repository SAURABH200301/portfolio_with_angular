interface liveLinks {
    linkIcon: string,
    link: string
}
export interface projects {
    image: string,
    head: string,
    desc: string,
    techUsed: string[],
    LiveLink: liveLinks[],
    createdDate: Date,
    isHovered: boolean
}

export const Projects: projects[] = [
    {
        image: '/assets/icons/Tasky.gif',
        head: 'Task management app',
        desc: ' task management app given you feature of authentication, CRUD, function of MONGODB',
        techUsed: ['/assets/icons/react.png', '/assets/icons/mongo.png', '/assets/icons/node.png', '/assets/icons/express.png'],
        LiveLink: [
            {
                linkIcon: "/assets/icons/github.png",
                link: "https://github.com/SAURABH200301/Task-Management-app"
            }
        ],
        createdDate: new Date('2023-09-09'),
        isHovered: false
    },
    {
        image: '/assets/icons/newsapp.gif',
        head: 'NEWS APP',
        desc: ' News app is an application where you can read live news',
        techUsed: ['/assets/icons/react.png', '/assets/icons/api.png', '/assets/icons/BS.png'],
        LiveLink: [
            {
                linkIcon: "/assets/icons/github.png",
                link: "https://github.com/SAURABH200301/News_App"
            },
            {
                linkIcon: "/assets/icons/link.png",
                link: "https://github.com/SAURABH200301/News_App"
            }
        ],
        createdDate: new Date('2022-03-07'),
        isHovered: false
    },
    {
        image: '/assets/icons/chat_app.gif',
        head: 'Join - A chatting app',
        desc: ' Join is a chat application',
        techUsed: ['/assets/icons/react.png', '/assets/icons/firebase.png', '/assets/icons/node.png'],
        LiveLink: [
            {
                linkIcon: "/assets/icons/github.png",
                link: "https://github.com/SAURABH200301/Chat-App"
            },
            {
                linkIcon: "/assets/icons/link.png",
                link: "https://chat-app-49705.web.app/"
            }
        ],
        createdDate: new Date('2022-01-17'),
        isHovered: false
    },
    {
        image: '/assets/icons/box_office.gif',
        head: 'Box Office',
        desc: ' Box Office is a webapp where you can search about actors and movies and make them starred',
        techUsed: ['/assets/icons/react.png', '/assets/icons/api.png'],
        LiveLink: [
            {
                linkIcon: "/assets/icons/github.png",
                link: "https://github.com/SAURABH200301/box-office"
            },
            {
                linkIcon: "/assets/icons/link.png",
                link: "https://box-office-steel.vercel.app/"
            }
        ],
        createdDate: new Date('2022-01-06'),
        isHovered: false
    },
    
    {
        image: '/assets/icons/musicplayer.gif',
        head: 'Music Player',
        desc: ' Music player is demo of todays spotify not same. ',
        techUsed: ['/assets/icons/html.png', '/assets/icons/css.png', '/assets/icons/js.png'],
        LiveLink: [
            {
                linkIcon: "/assets/icons/github.png",
                link: "https://github.com/SAURABH200301/MusicPlayer"
            }
        ],
        createdDate: new Date('2021-06-27'),
        isHovered: false
    }
]
