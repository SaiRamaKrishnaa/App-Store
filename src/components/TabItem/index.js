// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onSelect} = props
  const {tabId, displayText} = tabDetails
  const buttonClass = isActive ? 'tab-button active' : 'tab-button'
  const onClickTab = () => {
    onSelect(tabId)
  }

  return (
    <li key={tabId} className="tab-container">
      <button className={buttonClass} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
