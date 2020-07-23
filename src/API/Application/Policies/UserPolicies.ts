import User from '../Domain/Entities/User/User';

export async function userCanRequest(user: User, req) {
  try {

    const client = await req.token.client;
    return true;

  } catch (error) {
    return false;
  }
}
