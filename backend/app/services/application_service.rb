class ApplicationService

  class Unprocessable < StandardError; end

  protected 
  
  def date_is_in_past(date)
    Date.today > date.to_date
  end
end
