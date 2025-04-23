import TabItem from './TabItem';
import { Outlet } from 'react-router';

function TabContainer(props) {

    const getTabs = () => {
        return [
            {
                text: 'Home',
                url: '/'
            },
            {
                text: 'Create News',
                url: '/news-create',
            },
            {
                text: 'Login',
                url: '/login',
            }
        ];
    }

    return (
        <div className='tab-navigation'>
            <div className='tab-container'>
                {
                    getTabs().map(tab => <TabItem key={tab.text}
                        text={tab.text}
                        url={tab.url} />)
                }

            </div>
            <Outlet />
        </div>
    )
}

export default TabContainer;