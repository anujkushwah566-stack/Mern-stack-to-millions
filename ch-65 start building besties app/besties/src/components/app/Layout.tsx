import { Link } from "react-router-dom"
import Avatar from "../shared/Avatar"
import Card from "../shared/Card"

const Layout = () => {
    const leftAsideSize = 350
    const rightAsideSize = 450

    const sectionDimention = {
        width: `calc(100% - ${leftAsideSize+rightAsideSize}px)`,
        marginLeft: leftAsideSize
    }

    const menus = [
        {
            icon: "ri-home-9-line",
            href: "/app",
            label: "dashboard"
        },
        {
            icon: "ri-chat-smile-3-line",
            href: "/posts",
            label: "my posts"
        },
        {
            icon: "ri-group-line",
            href: "/friends",
            label: "friends"
        }
    ]
    return (
        <div className="min-h-screen">
            <aside className="bg-white fixed top-0 left-0 h-full p-8 overflow-auto" style={{width: leftAsideSize}}>
                <div className="space-y-8 h-full rounded-2xl p-8 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
                        <Avatar 
                            title="Rahul kumar"
                            subtitle="Fullstack"
                            image="/images/avt.avif"
                            titleColor="white"
                            subtitleColor="#ddd"
                        />
                        <div>
                            {
                                menus.map((item, index)=>(
                                    <Link key={index} to={item.href} className="flex items-center gap-3 text-gray-300 py-3 hover:text-white">
                                        <i className={`${item.icon} text-xl`}></i>
                                        <label className="capitalize">{item.label}</label>
                                    </Link>
                                ))
                            }

                            <button className="flex items-center gap-2 text-gray-300 py-3 hover:text-white">
                                <i className="ri-logout-circle-r-line text-xl"></i>
                                <label>Logout</label>
                            </button>

                        </div>
                </div>
            </aside>
            
            <section className="py-8 px-1" style={sectionDimention}>
                <Card></Card>
            </section>

            <aside className="bg-white fixed top-0 right-0 h-full p-8 overflow-auto" style={{width: rightAsideSize}}>
                  <Card title="My Friends" divider>
                    <div className="space-y-5">
                        {
                            Array(20).fill(0).map((item, index)=>(
                                <Avatar 
                                    size="md"
                                    image="/images/avt.avif"
                                    title="Saurav kumar"
                                    subtitle={
                                        <div className="flex items-center gap-2">
                                            <div className="w-[8px] h-[8px] rounded-full bg-green-500" />
                                            <p className="text-gray-500 text-xs">Online</p>
                                        </div>
                                    }
                                />
                            ))
                        }
                    </div>
                  </Card>
            </aside>

        </div>
    )
}

export default Layout