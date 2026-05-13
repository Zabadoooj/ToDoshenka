import './LoginPage.css'

function LoginPage() {
    return(
        <div className="loginPage">
            
            <form>
                <h1>Вход в аккаунт</h1>
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