// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails

  return (
    <li key={appId} className="appItem-container">
      <img className="appItem-image" alt={appName} src={imageUrl} />
      <p className="appItem-description">{appName}</p>
    </li>
  )
}

export default AppItem
