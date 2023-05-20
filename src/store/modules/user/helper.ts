import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUw8-bvWlgCgCI7ftTBKg6hvih9N3v1AAZvfpfhfAYWNmfsHn6rTAs5eZtUK2hI_hr0A&usqp=CAU',
      // avatar: '',
      // name: 'ChenZhaoYu',
      name: 'gpt',
      // description: 'Star on <a href="https://github.com/Chanzhaoyu/chatgpt-bot" class="text-blue-500" target="_blank" >GitHub</a>',
      description: 'gpt',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
