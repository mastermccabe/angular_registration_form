export class User {
  constructor(
    public id: number = null,
    public firstname: string = "",
    public lastname: string = "",
    public email: string = "",
    public password: string = "",
    public address: string="",
    public address2: string="",
    public city: string="",
    public state: string="",
    public lucky: boolean=null,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
