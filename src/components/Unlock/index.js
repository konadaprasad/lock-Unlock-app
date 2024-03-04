import {useState} from 'react'
import {MainContainer, Image, Heading, Button} from './styledComponents'

const Unlock = props => {
  const [lockStatus, changeLockToUnlock] = useState(false)

  const changeLock = () => {
    changeLockToUnlock(prevState => !prevState)
  }

  return !lockStatus ? (
    <MainContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
        alt="lock"
      />
      <Heading>Your Device is Locked</Heading>
      <Button onClick={changeLock} type="button">
        Unlock
      </Button>
    </MainContainer>
  ) : (
    <MainContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
        alt="unlock"
      />
      <Heading>Your Device is Unlocked</Heading>
      <Button onClick={changeLock} type="button">
        Lock
      </Button>
    </MainContainer>
  )
}
export default Unlock
