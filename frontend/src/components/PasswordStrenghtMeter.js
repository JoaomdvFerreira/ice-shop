import zxcvbn from 'zxcvbn';
export default function PasswordStrenghtMeter({ password }) {
    const passResult = zxcvbn(password);
    const num = passResult.score * 100 / 4;

    const progressColor = () => {
        switch (passResult.score) {
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return '#828282';
        }
    };

    const changePasswordColor = () => ({
        width: `${num}%`,
        background: progressColor(),
        height: '7px'
    });

    const createPasswordLabel = () => {
        switch (passResult.score) {
            case 1:
                return 'Weak';
            case 2:
                return 'Fair';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return 'Very Weak';
        }
    }

    return (
        <>
            <div className="progress">
                <div className="progress-bar" style={changePasswordColor()}></div>
            </div>
            <p className="progress-bar-label" style={{ color: progressColor() }}>{createPasswordLabel()}</p>
        </>
    )
}
