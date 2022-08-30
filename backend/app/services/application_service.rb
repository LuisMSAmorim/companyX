class ApplicationService

  class Unauthorized < StandardError; end

  protected 
  
  def date_is_in_past(date)
    byebug
    Date.today > date
  end
end
