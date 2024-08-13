import { User } from '../models/user.js';

function changeUserAvatar(userId, avatar) {
  return User.findByIdAndUpdate(userId, { avatarUrl: avatar });
}

export { changeUserAvatar };
