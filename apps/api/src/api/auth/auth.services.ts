import { hashToken } from '../../utils/hash-token.js';
import { prisma } from '../../utils/prisma.js';

export const addRefreshTokenToWhitelist = ({
  jti,
  refreshToken,
  userId,
}: {
  jti: string;
  refreshToken: string;
  userId: string;
}) => {
  return prisma.refreshToken.create({
    data: {
      id: jti,
      hashedToken: hashToken(refreshToken),
      userId,
    },
  });
};

export const findRefreshToken = (id: string) => {
  return prisma.refreshToken.findUnique({
    where: { id },
  });
};

export const deleteRefreshToken = (id: string) => {
  return prisma.refreshToken.update({
    where: { id },
    data: {
      revoked: true,
    },
  });
};

export const revokeTokens = (userId: string) => {
  return prisma.refreshToken.updateMany({
    where: { userId },
    data: {
      revoked: true,
    },
  });
};
