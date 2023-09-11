// @ts-ignore
import SendBirdApp from '@sendbird/uikit-react/App'
import '@sendbird/uikit-react/dist/index.css';

const Chat = ({appId='AEE01016-4B92-47D5-8EB4-5B99B643F595', userId='akash'}) => {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
        <SendBirdApp appId={appId} userId={userId} />
    </div>
  )
}

export default Chat