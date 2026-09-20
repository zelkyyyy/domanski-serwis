export const formatPhone = (p: string) =>
  p.replace(/^\+48(\d{3})(\d{3})(\d{3})$/, "+48 $1 $2 $3");
