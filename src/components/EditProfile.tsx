import { useActionState } from 'react';
import { SubmitButton } from './SubmitButton';

type ActionState = { error?: string; success?: boolean };
// type Flag = true | false;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function updateEditProfile(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const username = formData.get('username') as string;

  if (!username || username.length < 3) {
    return { error: 'User name must be at least 3 chars.' };
  }

  await wait(500);

  return { success: true };
}

export default function EditProfile() {
  const [state, formAction, isPending] = useActionState(updateEditProfile, {});
  return (
    <form
      action={formAction}
      style={{
        maxWidth: '300px',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: '10px',
      }}
    >
      <input type="text" name="username" placeholder="Enter user name" disabled={isPending} />
      <SubmitButton>Submit</SubmitButton>
      {state.error && <p>{state.error}</p>}
      {state.success && <p>Updated successfully!</p>}
    </form>
  );
}
