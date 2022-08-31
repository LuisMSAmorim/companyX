class ApplicationService
  class Unprocessable < StandardError; end

  protected

  def days_between_today_and(date)
    (date.to_date - Date.today).to_i
  end

  def date_is_in_past(date)
    Date.today > date.to_date
  end
end
