import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMap from './MyMap.jsx';

function MyTabs() {
    const london = [51.505, -0.09];
    const paris = [48.8566, 2.3533];
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>London</Tab>
                    <Tab>Paris</Tab>
                </TabList>

                <TabPanel>
                    <MyMap location={london} />
                </TabPanel>
                <TabPanel>
                    <MyMap location={paris} />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default MyTabs;
