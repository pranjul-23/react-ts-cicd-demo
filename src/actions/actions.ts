type ActionState = { error?: string; success?: boolean };

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
