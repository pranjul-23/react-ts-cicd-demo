import { useActionState } from 'react';
import { SubmitButton } from './SubmitButton';
import { updateEditProfile } from '../actions/actions';

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
