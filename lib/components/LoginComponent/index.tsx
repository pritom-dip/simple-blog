import users from '@/data/users';
import { useAppDispatch } from '@/hooks/hooks';
import { login } from '@/redux/slices/userSlice';
import { useRouter } from 'next/router';
import styles from './LoginComponent.module.scss';

const LoginComponent = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = async (name: string) => {
    dispatch(login(name));
    await router.push('/');
  };

  return (
    <>
      <div className={styles.wrapper}>
        {users.map(user => (
          <div
            onClick={() => handleClick(user.name)}
            key={user.id}
            className={styles.card}
          >
            Login With {user.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default LoginComponent;
