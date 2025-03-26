const RememberMeCheckbox = ({ checked, onChange }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <div
        className={`flex items-center justify-center w-4 h-4 rounded-full cursor-pointer ${
          checked
            ? "bg-primary text-secondary-bg border-primar"
            : "border border-primary-text dark:border-primary-text-dark"
        }`}
        role="checkbox"
        htmlFor="remember-me"
        aria-label="Remember me"
        aria-checked={checked}
        onClick={onChange}
      >
        {checked && <i className="ri-check-line text-xs" />}
      </div>
      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-primary focus:ring-primary border-primary rounded hidden"
      />
      <label
        htmlFor="remember-me"
        aria-labelledby="remember-me"
        className="ml-1 block text-sm text-primary-text dark:text-primary-text-dark"
      >
        Remember me
      </label>
    </div>
    <a
      href="/forgot-password"
      className="text-primary hover:text-primary-hover text-sm font-medium transition-colors"
    >
      Forgot password?
    </a>
  </div>
);

export default RememberMeCheckbox;
