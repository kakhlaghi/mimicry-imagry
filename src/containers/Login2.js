const Login2 = () => {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
              <input type='email' name='email' placeholder='Email' />
              <label htmlFor='email'>Email</label>
        </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <button onClick={this.login}>Login</button>     
         </form>
      </div>
    );
  };