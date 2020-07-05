import { User } from '../models/user.model';
import { AppState } from '../store/AppState';

export const getUser = (state: AppState): User => state.user;
