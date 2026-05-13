import './LoginPage.css'

function LoginPage() {
    return(
        <div className="loginPage">
            
            <form>
                <label>
                    Имя пользователя:
                    <input type="text" name="username" />
                </label>
                <label>
                    Пароль:
                    <input type="password" name="password" />
                </label>

                <input type="submit" value={"Отправить"} />
            </form>

        </div>
    )
}

export default LoginPage