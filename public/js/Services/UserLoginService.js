export default class UserLoginService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    authenticateUser = (user) => {
        const t = this.userRepository.getUserByEmail(user.getEmail());
        console.log("user from service " + t?.getEmail());
        return user;
    };
}
//# sourceMappingURL=UserLoginService.js.map