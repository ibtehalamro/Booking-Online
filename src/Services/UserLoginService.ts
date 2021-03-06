import { UserRepository } from "./../Repository/UserRepository";
import User from "../Models/User.js";

export default class UserLoginService {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  authenticateUser = (user: User): User => {
    const t = this.userRepository.getUserByEmail(user.getEmail());

    console.log("user from service " + t?.getEmail());
    return user;
  };
}
